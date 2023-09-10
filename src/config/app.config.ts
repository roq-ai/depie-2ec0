interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Influencer'],
  customerRoles: ['Customer'],
  tenantRoles: ['Influencer', 'Subscriber'],
  tenantName: 'Organization',
  applicationName: 'depie',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    "View the Influencer's Organization profile",
    "Purchase and view the Influencer's courses",
    "Purchase and view the Influencer's paid FAQs",
    'View the community tab',
  ],
  ownerAbilities: [
    'Manage Organization profile',
    'Manage newsletters',
    'Send WhatsApp broadcasts to Subscribers',
    'Manage paid FAQs',
    'Manage courses',
    'Invite Subscribers to join Organization',
  ],
};
