import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { sendContact } from '../api/client';
import { useSettings } from '../context/SettingsContext';

const INITIAL = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, ok: null, error: null });
  const { t } = useTranslation();
  const s = useSettings();

  const update = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: null }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, ok: null, error: null });
    setErrors({});
    try {
      const res = await sendContact(form);
      if (res.success) {
        setStatus({ loading: false, ok: t('form.contactSuccess'), error: null });
        setForm(INITIAL);
      }
    } catch (err) {
      const data = err.response?.data;
      if (err.response?.status === 422 && data?.errors) {
        const flat = {};
        Object.entries(data.errors).forEach(([k, v]) => { flat[k] = Array.isArray(v) ? v[0] : v; });
        setErrors(flat);
        setStatus({ loading: false, ok: null, error: t('form.errors') });
      } else {
        setStatus({ loading: false, ok: null, error: t('form.errors') });
      }
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">{t('contact.kicker')}</span>
          <h1>{t('contact.title')}</h1>
          <p>{t('contact.sub')}</p>
          <div className="breadcrumb"><Link to="/">{t('common.home')}</Link> /&nbsp; {t('contact.kicker')}</div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <h2>{t('contact.h2')}</h2>
            <div className="contact-info">
              <div className="ci-item">
                <div className="ci-icon">📍</div>
                <div>
                  <h4>{t('contact.address')}</h4>
                  <p>{s.site_address}</p>
                </div>
              </div>
              <div className="ci-item">
                <div className="ci-icon">📞</div>
                <div>
                  <h4>{t('contact.phoneL')}</h4>
                  <p>{s.site_phone}{s.site_gsm && <><br />{s.site_gsm}</>}</p>
                </div>
              </div>
              <div className="ci-item">
                <div className="ci-icon">✉</div>
                <div>
                  <h4>{t('contact.emailL')}</h4>
                  <p>{s.site_email}</p>
                </div>
              </div>
              <div className="ci-item">
                <div className="ci-icon">🕒</div>
                <div>
                  <h4>{t('contact.hoursL')}</h4>
                  <p>{s.site_hours}</p>
                </div>
              </div>
            </div>
          </div>

          <form className="form-card" onSubmit={submit} noValidate>
            <h3>{t('contact.sendMsg')}</h3>
            {status.ok && <div className="alert alert-success">{status.ok}</div>}
            {status.error && <div className="alert alert-error">{status.error}</div>}

            <div className="form-row">
              <div className="field">
                <label>{t('form.name')} *</label>
                <input type="text" name="name" value={form.name} onChange={update} className={errors.name ? 'error' : ''} required />
                {errors.name && <small className="field-error">{errors.name}</small>}
              </div>
              <div className="field">
                <label>{t('form.email')} *</label>
                <input type="email" name="email" value={form.email} onChange={update} className={errors.email ? 'error' : ''} required />
                {errors.email && <small className="field-error">{errors.email}</small>}
              </div>
            </div>
            <div className="field">
              <label>{t('form.phone')}</label>
              <input type="tel" name="phone" value={form.phone} onChange={update} />
            </div>
            <div className="field">
              <label>{t('form.message')} *</label>
              <textarea name="message" rows="5" value={form.message} onChange={update} className={errors.message ? 'error' : ''} required />
              {errors.message && <small className="field-error">{errors.message}</small>}
            </div>
            <button type="submit" className="btn btn-gold" disabled={status.loading} style={{ width: '100%' }}>
              {status.loading ? t('form.sending') : t('form.submitContact')}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
