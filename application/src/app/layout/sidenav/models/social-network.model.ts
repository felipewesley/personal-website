import { SocialNetworkIconType } from "./social-network-icon-type.enum";

export interface SocialNetwork {
    name: string;
    label: string;
    href: string;
    icon: string;
    iconType?: SocialNetworkIconType;
    disabled?: boolean;
}