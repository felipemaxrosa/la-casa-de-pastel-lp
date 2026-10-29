// GROQ queries. Os campos usam alias para casar com as shapes estáticas
// (HIGHLIGHTS, TESTIMONIALS etc.) e facilitar o fallback.

export const siteConfigQuery = `*[_type == "siteConfig"][0]{
  tagline,
  whatsapp, whatsappDisplay, phone, email,
  address, geo, facebook, instagram,
  hoursStore[]{days, time},
  hoursDelivery[]{days, time}
}`;

export const highlightsQuery = `*[_type == "menuItem" && destaque == true] | order(order asc){
  "name": name,
  "desc": description,
  price,
  tag,
  "photo": foto.asset->url
}`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc){
  stars,
  text,
  "who": author,
  "sub": source
}`;

export const galleryQuery = `*[_type == "galleryImage"] | order(order asc){
  "url": image.asset->url,
  "alt": coalesce(alt, title)
}`;
