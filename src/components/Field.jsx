export default function Field({ label, required, error, ...props }) {
  return (
    <div className="field">
      <label className="field-label">
        <span className="field-label-text">
          {label}
          {required && <span className="field-required">*</span>}
        </span>
        <span className="field-label-line" />
      </label>
      <input className={`field-input ${error ? 'field-input-error' : ''}`} {...props} />
      {error && <span className="field-error-text">{error}</span>}
    </div>
  )
}
