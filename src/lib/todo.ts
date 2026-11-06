// [[NEEDS LAUREN: …]] placeholders show as yellow marks in previews so nothing
// unconfirmed slips through, and are hidden on the live site. Netlify sets
// CONTEXT=production for the live deploy; HIDE_TODOS=1 forces it locally.
const TODO = /\[\[NEEDS LAUREN:[^\]]*\]\]/g;

export const hideTodos = process.env.CONTEXT === 'production' || process.env.HIDE_TODOS === '1';

/** True when the text is nothing but placeholders. */
export const isTodoOnly = (text: string) => text.replace(TODO, '').trim() === '';

/** Drop items whose answer is only a placeholder (live site only). */
export const confirmed = <T extends { a: string }>(items: T[]) => (hideTodos ? items.filter((i) => !isTodoOnly(i.a)) : items);
