import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { sendReservation } from '../api/client';

const TIMES = ['12:00','13:00','14:00','19:00','20:00','21:00','22:00'];

export default function ReservationForm({ inline = false }) {
  const today = new Date().toISOString().split('T')[0];
  const [form, setForm] = useState({
    full_name: '', email: '', phone: '',
    reservation_date: today, reservation_time: '20:00', guests: 2,
    occasion: '', notes: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, ok: null, error: null });
  const { t } = useTranslation();

  const update = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: null }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, error: null });
    setErrors({});
    try {
      const res = await sendReservation({ ...form, guests: Number(form.guests) });
      if (res.success) {
        setStatus({ loading: false, ok: t('form.rezSuccess'), error: null });
        setForm(f => ({ ...f, full_name: '', email: '', phone: '', notes: '', occasion: '' }));
      }
    } catch (err) {
      const data = err.response?.data;
      if (err.response?.status === 422 && data?.errors) {
        const flat = {};
        Object.entries(data.errors).forEach(([k, v]) => { flat[k] = Array.isArray(v) ? v[0] : v; });
        setErrors(flat);
        setStatus({ loading: false, ok: null, error: t('form.errors') });
      } else {
        setStatus({ loading: false, ok: null, error: data?.message || t('form.errors') });
      }
    }
  };

  if (inline) {
    return (
      <form className="rez-form-inline" onSubmit={submit} noValidate>
        <div className="field">
          <label>{t('form.name')}</label>
          <input type="text" name="full_name" value={form.full_name} onChange={update} className={errors.full_name ? 'error' : ''} required />
          {errors.full_name && <small className="field-error">{errors.full_name}</small>}
        </div>
        <div className="field">
          <label>{t('form.email')}</label>
          <input type="email" name="email" value={form.email} onChange={update} className={errors.email ? 'error' : ''} placeholder="ornek@mail.com" required />
          {errors.email && <small className="field-error">{errors.email}</small>}
        </div>
        <div className="field">
          <label>{t('form.phone')}</label>
          <input type="tel" name="phone" value={form.phone} onChange={update} className={errors.phone ? 'error' : ''} placeholder="0 5XX XXX XX XX" required />
          {errors.phone && <small className="field-error">{errors.phone}</small>}
        </div>
        <div className="field">
          <label>{t('form.date')}</label>
          <input type="date" name="reservation_date" value={form.reservation_date} min={today} onChange={update} className={errors.reservation_date ? 'error' : ''} required />
          {errors.reservation_date && <small className="field-error">{errors.reservation_date}</small>}
        </div>
        <div className="field">
          <label>{t('form.time')}</label>
          <select name="reservation_time" value={form.reservation_time} onChange={update}>
            {TIMES.map(tt => <option key={tt} value={tt}>{tt}</option>)}
          </select>
        </div>
        <div className="field">
          <label>{t('form.guests')}</label>
          <select name="guests" value={form.guests} onChange={update}>
            {Array.from({ length: 12 }, (_, i) => i + 1).map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
        <div className="field" style={{ gridColumn: '1 / -1' }}>
          <button type="submit" className="btn btn-gold" disabled={status.loading} style={{ padding: '13px 32px', whiteSpace: 'nowrap', width: '100%' }}>
            {status.loading ? t('form.sending') : t('form.submitInline')}
          </button>
        </div>
        {status.ok && <div className="alert alert-success" style={{ gridColumn: '1 / -1', marginTop: 10 }}>{status.ok}</div>}
        {status.error && <div className="alert alert-error" style={{ gridColumn: '1 / -1', marginTop: 10 }}>{status.error}</div>}
      </form>
    );
  }

  return (
    <form className="form-card" onSubmit={submit} noValidate>
      <h3>{t('section.rez.title')}</h3>
      {status.ok && <div className="alert alert-success">{status.ok}</div>}
      {status.error && <div className="alert alert-error">{status.error}</div>}

      <div className="form-row">
        <div className="field">
          <label>{t('form.name')} *</label>
          <input type="text" name="full_name" value={form.full_name} onChange={update} className={errors.full_name ? 'error' : ''} required />
          {errors.full_name && <small className="field-error">{errors.full_name}</small>}
        </div>
        <div className="field">
          <label>{t('form.email')} *</label>
          <input type="email" name="email" value={form.email} onChange={update} className={errors.email ? 'error' : ''} required />
          {errors.email && <small className="field-error">{errors.email}</small>}
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label>{t('form.phone')} *</label>
          <input type="tel" name="phone" value={form.phone} onChange={update} placeholder="0 5XX XXX XX XX" className={errors.phone ? 'error' : ''} required />
          {errors.phone && <small className="field-error">{errors.phone}</small>}
        </div>
        <div className="field">
          <label>{t('form.guests')} *</label>
          <select name="guests" value={form.guests} onChange={update}>
            {Array.from({ length: 12 }, (_, i) => i + 1).map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label>{t('form.date')} *</label>
          <input type="date" name="reservation_date" value={form.reservation_date} min={today} onChange={update} required />
        </div>
        <div className="field">
          <label>{t('form.time')} *</label>
          <select name="reservation_time" value={form.reservation_time} onChange={update}>
            {TIMES.map(tt => <option key={tt} value={tt}>{tt}</option>)}
          </select>
        </div>
      </div>

      <div className="field">
        <label>{t('form.occasion')}</label>
        <select name="occasion" value={form.occasion} onChange={update}>
          <option value="">{t('form.occasionPlaceholder')}</option>
          <option value="Doğum Günü">{t('form.occBirthday')}</option>
          <option value="Yıldönümü">{t('form.occAnniversary')}</option>
          <option value="İş Yemeği">{t('form.occBusiness')}</option>
          <option value="Aile Yemeği">{t('form.occFamily')}</option>
          <option value="Diğer">{t('form.occOther')}</option>
        </select>
      </div>

      <div className="field">
        <label>{t('form.notes')}</label>
        <textarea name="notes" rows="3" value={form.notes} onChange={update} />
      </div>

      <button type="submit" className="btn btn-gold" disabled={status.loading} style={{ width: '100%' }}>
        {status.loading ? t('form.sending') : t('form.submitRez')}
      </button>
    </form>
  );
}
