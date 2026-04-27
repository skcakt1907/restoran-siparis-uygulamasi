import { useTranslation } from 'react-i18next';

export default function Loader({ text }) {
  const { t } = useTranslation();
  return (
    <div className="loader" role="status">
      <div className="loader-spinner" />
      <p>{text || t('common.loading')}</p>
    </div>
  );
}
