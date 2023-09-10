const mapping: Record<string, string> = {
  communities: 'community',
  courses: 'course',
  faqs: 'faq',
  newsletters: 'newsletter',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
