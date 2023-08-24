'use client';
import { subscribeToNewsletter } from './actions.js';

export default function NewsletterSignup() {
  return (
    <form action={subscribeToNewsletter}>
      <input
        type="email"
        name="email"
        placeholder="Email address"
        autoComplete="email"
        aria-label="Email address"
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}
