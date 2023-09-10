import { CommunityInterface } from 'interfaces/community';
import { CourseInterface } from 'interfaces/course';
import { FaqInterface } from 'interfaces/faq';
import { NewsletterInterface } from 'interfaces/newsletter';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  community?: CommunityInterface[];
  course?: CourseInterface[];
  faq?: FaqInterface[];
  newsletter?: NewsletterInterface[];
  user?: UserInterface;
  _count?: {
    community?: number;
    course?: number;
    faq?: number;
    newsletter?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
