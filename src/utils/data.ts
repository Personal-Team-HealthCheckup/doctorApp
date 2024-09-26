import { profileImage1, iconFacebook, iconTwitter, iconInstagram, iconLinkedin, profileImage2, profileImage3, profileImage5, profileImage6, profileImage7, profileImage8, profileImage9 } from "@/public/images/assets";

export interface TeamMembersData  {
    id: number;
    profileImage: any;
    name: string;
    designation: string;
    description: string;
    links: {
        id: number;
        link: string;
        name: string;
        icon: string;
    }[];
}
export const teamMembersdata: TeamMembersData[] = [
    {
    id: 1,
    profileImage: profileImage1,
    name: 'John Carter',
    designation: 'CEO & Co-Founder',
    description: 'Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. ',
    links: [
        {
            id: 1,
            link: "#",
            name: 'facebook',
            icon: iconFacebook,
        },
        {
            id: 2,
            link: "#",
            name: 'twitter',
            icon: iconTwitter,
        }
        ,
        {
            id: 3,
            link: "#",
            name: 'instagram',
            icon: iconInstagram,
        },
        {
            id: 4,
            link: "#",
            name: 'linkedin',
            icon: iconLinkedin,
        }
    ]
},
    {
    id: 2,
    profileImage: profileImage2,
    name: 'Sophie Moore',
    designation: 'dental specialist',
    description: 'Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. ',
    links: [
        {
            id: 1,
            link: "#",
            name: 'facebook',
            icon: iconFacebook,
        },
        {
            id: 2,
            link: "#",
            name: 'twitter',
            icon: iconTwitter,
        }
        ,
        {
            id: 3,
            link: "#",
            name: 'instagram',
            icon: iconInstagram,
        },
        {
            id: 4,
            link: "#",
            name: 'linkedin',
            icon: iconLinkedin,
        }
    ]
},
,
    {
    id: 3,
    profileImage: profileImage3,
    name: 'Matt Cannon',
    designation: 'orthopedic',
    description: 'Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. ',
    links: [
        {
            id: 1,
            link: "#",
            name: 'facebook',
            icon: iconFacebook,
        },
        {
            id: 2,
            link: "#",
            name: 'twitter',
            icon: iconTwitter,
        }
        ,
        {
            id: 3,
            link: "#",
            name: 'instagram',
            icon: iconInstagram,
        },
        {
            id: 4,
            link: "#",
            name: 'linkedin',
            icon: iconLinkedin,
        }
    ]
},
,
    {
    id: 4,
    profileImage: profileImage5,
    name: 'Andy Smith',
    designation: 'brain surgeon',
    description: 'Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. ',
    links: [
        {
            id: 1,
            link: "#",
            name: 'facebook',
            icon: iconFacebook,
        },
        {
            id: 2,
            link: "#",
            name: 'twitter',
            icon: iconTwitter,
        }
        ,
        {
            id: 3,
            link: "#",
            name: 'instagram',
            icon: iconInstagram,
        },
        {
            id: 4,
            link: "#",
            name: 'linkedin',
            icon: iconLinkedin,
        }
    ]
},
,
    {
    id: 5,
    profileImage: profileImage6,
    name: 'Lily Woods',
    designation: 'heart specialist',
    description: 'Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. ',
    links: [
        {
            id: 1,
            link: "#",
            name: 'facebook',
            icon: iconFacebook,
        },
        {
            id: 2,
            link: "#",
            name: 'twitter',
            icon: iconTwitter,
        }
        ,
        {
            id: 3,
            link: "#",
            name: 'instagram',
            icon: iconInstagram,
        },
        {
            id: 4,
            link: "#",
            name: 'linkedin',
            icon: iconLinkedin,
        }
    ]
},
    {
    id: 7,
    profileImage: profileImage7,
    name: 'Patrick Meyer',
    designation: 'eye specialist',
    description: 'Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. ',
    links: [
        {
            id: 1,
            link: "#",
            name: 'facebook',
            icon: iconFacebook,
        },
        {
            id: 2,
            link: "#",
            name: 'twitter',
            icon: iconTwitter,
        }
        ,
        {
            id: 3,
            link: "#",
            name: 'instagram',
            icon: iconInstagram,
        },
        {
            id: 4,
            link: "#",
            name: 'linkedin',
            icon: iconLinkedin,
        }
    ]
},
{
    id: 8,
    profileImage: profileImage8,
    name: 'John Carter',
    designation: 'CEO & Co-Founder',
    description: 'Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. ',
    links: [
        {
            id: 1,
            link: "#",
            name: 'facebook',
            icon: iconFacebook,
        },
        {
            id: 2,
            link: "#",
            name: 'twitter',
            icon: iconTwitter,
        }
        ,
        {
            id: 3,
            link: "#",
            name: 'instagram',
            icon: iconInstagram,
        },
        {
            id: 4,
            link: "#",
            name: 'linkedin',
            icon: iconLinkedin,
        }
    ]
},
{
    id: 9,
    profileImage: profileImage9,
    name: 'John Doe',
    designation: 'CEO & Co-Founder',
    description: 'Lorem ipsum dolor sit amet consecte adipiscing elit amet hendrerit pretium nulla sed enim iaculis mi. ',
    links: [
        {
            id: 1,
            link: "#",
            name: 'facebook',
            icon: iconFacebook,
        },
        {
            id: 2,
            link: "#",
            name: 'twitter',
            icon: iconTwitter,
        }
        ,
        {
            id: 3,
            link: "#",
            name: 'instagram',
            icon: iconInstagram,
        },
        {
            id: 4,
            link: "#",
            name: 'linkedin',
            icon: iconLinkedin,
        }
    ]
},
]