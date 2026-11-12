type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M14 8.5h2.5V5.5h-2.5c-2.2 0-4 1.8-4 4v2.5H8v3h2.5V21h3v-6h2.5l.5-3h-3V9.5c0-.55.45-1 1-1z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.5 17.5 4 20l2.6-.7A8 8 0 1 0 4 12a7.96 7.96 0 0 0 1.1 4.06z" />
      <path d="M9.3 9.6c0-.4.4-.9.8-.9h.6c.3 0 .6.2.7.5l.5 1.3c.1.3 0 .6-.2.8l-.4.4c-.2.2-.2.5 0 .8.5.8 1.3 1.6 2.1 2.1.3.2.6.2.8 0l.4-.4c.2-.2.5-.3.8-.2l1.3.5c.3.1.5.4.5.7v.6c0 .4-.5.8-.9.8-2.9.2-6.3-3.2-6.9-6.9Z" />
    </svg>
  );
}
