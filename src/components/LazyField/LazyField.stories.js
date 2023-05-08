import '../../assets/tailwind.css';
import PawLazyField from './LazyField'
import { componentProps } from '../../index.js'

export default {
    title: 'Components/PawLazyField',
    component: PawLazyField,
    argTypes: {
        /* Field content */
        default: {
            control: { type: 'text' },
            description: `The slot content defines the default value of the LazyField.<br>
                <span className="material-icons align-bottom mr-1">warning</span> Prop \`value\` overrides slot content.`,
            table: {
                category: 'Field content',
            },
        },
        value: {
            control: { type: 'text' },
            description: `**Reactive** value of LazyField.<br>
                <span className="material-icons align-bottom mr-1">warning</span> This value overrides any existing slot content.`,
            table: {
                category: 'Field content',
            },
        },

        /* Top labels */
        label: {
            control: { type: 'text' },
            description: 'Content of top left label.',
            table: {
                category: 'Top labels',
            },
        },
        info: {
            control: { type: 'text' },
            description: 'Content of top right label.',
            table: {
                category: 'Top labels',
            },
        },
        title: {
            control: { type: 'text' },
            description: 'Info label\'s tooltip text.',
            table: {
                category: 'Top labels',
            },
        },

        /* Icons */
        unitLabel: {
            control: { type: 'text' },
            description: 'Content of right label (unit).',
            table: {
                category: 'Icons',
            },
        },
        unitIcon: {
            control: { type: 'text' },
            description: 'Ligature alias of unit icon.',
            table: {
                category: 'Icons',
            },
        },
        unitIconOutlined: {
            control: { type: 'boolean' },
            description: 'Is unit icon displayed in outline theme?',
            table: {
                category: 'Icons',
            },
        },
        unitPosition: {
            control: { type: 'select' },
            options: ['top', 'center', 'bottom'],
            description: 'Vertical position of right icons.',
            table: {
                category: 'Icons',
            },
        },

        /* Actions & format */
        copy: {
            control: { type: 'boolean' },
            description: 'Might the content of the field be copied to the clipboard?',
            table: {
                category: 'Actions & format',
            },
        },
        secret: {
            control: { type: 'boolean' },
            description: 'Should the content of the field be hidden by default?',
            table: {
                category: 'Actions & format',
            },
        },
        action: {
            control: { type: 'select' },
            options: [undefined, 'mail', 'phone', 'link'],
            description: 'Action to perform on field clicked.',
            table: {
                category: 'Actions & format',
            },
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'md'],
            description: 'Font size of field content.',
            table: {
                category: 'Actions & format',
            },
        },
        format: {
            control: { type: 'select' },
            options: [undefined, 'mail', 'phone', 'number', 'card', 'iban', 'multiline', 'date', 'time', 'datetime'],
            description: 'Way in which the field should be formatted.',
            table: {
                category: 'Actions & format',
            },
        },
        link: {
            control: { type: 'text' },
            description: 'URL to be opened on link clicked. Default URL is defined by slot content.',
            table: {
                category: 'Actions & format',
            },
        },
        insecure: {
            control: { type: 'boolean' },
            description: 'Should the link be opened in http protocol?',
            table: {
                category: 'Actions & format',
            },
        },
        // Digits
        minDecimals: {
            control: { type: 'number' },
            description: 'Minimum number of decimal digits.',
            table: {
                category: 'Actions & format',
            },
        },
        maxDecimals: {
            control: { type: 'number' },
            description: 'Maximum number of decimal digits.',
            table: {
                category: 'Actions & format',
            },
        },
        hideErrors: {
            control: { type: 'boolean' },
            description: 'Should formatting errors be hidden?',
            table: {
                category: 'Actions & format',
            },
        },

        /* Events */
        clicked: {
            description: 'Fired on lazy field or action icon clicked when action is set.',
            table: {
                category: 'Events',
            },
        },
    },
};

const Template = (args) => ({
    components: { PawLazyField },
    setup() {
        return { args };
    },
    template: `<PawLazyField v-bind="args">{{ args.default }}</PawLazyField>`,
});

export const Date = Template.bind({});
Date.args = {
    label: 'Lazy Field Date Format',
    info: 'Info',
    title: 'Extended information about this field',
    format: 'date',
    default: 'Dienstag, 9.11.2010',
};
Date.parameters = {
    docs: {
        source: {
            code: `
<PawLazyField${componentProps(Date.args)}>${Date.args.default}</PawLazyField>`,
            type: 'dynamic',
        }
    }
}

export const Time = Template.bind({});
Time.args = {
    label: 'Lazy Field Time Format',
    info: 'Info',
    title: 'Extended information about this field',
    format: 'time',
    default: '17:14:30',
};
Time.parameters = {
    docs: {
        source: {
            code: `
<PawLazyField${componentProps(Time.args)}>${Time.args.default}</PawLazyField>`,
            type: 'dynamic',
        }
    }
}

export const Datetime = Template.bind({});
Datetime.args = {
    label: 'Lazy Field Datetime Format',
    info: 'Info',
    title: 'Extended information about this field',
    format: 'datetime',
    default: 'Monday, 28th March 2022 17:14',
};
Datetime.parameters = {
    docs: {
        source: {
            code: `
<PawLazyField${componentProps(Datetime.args)}>${Datetime.args.default}</PawLazyField>`,
            type: 'dynamic',
        }
    }
}

export const OverflownDate = Template.bind({});
OverflownDate.args = {
    label: 'Lazy Field Overflown Date',
    info: 'Info',
    title: 'Extended information about this field',
    format: 'date',
    default: '2022-02-29',
};
OverflownDate.parameters = {
    docs: {
        source: {
            code: `
<PawLazyField${componentProps(OverflownDate.args)}>${OverflownDate.args.default}</PawLazyField>`,
            type: 'dynamic',
        }
    }
}

export const WeekdayMismatch = Template.bind({});
WeekdayMismatch.args = {
    label: 'Lazy Field Weekday Mismatch',
    info: 'Info',
    title: 'Extended information about this field',
    format: 'datetime',
    default: 'Tuesday, 28th March 2022 17:14',
};
WeekdayMismatch.parameters = {
    docs: {
        source: {
            code: `
<PawLazyField${componentProps(WeekdayMismatch.args)}>${WeekdayMismatch.args.default}</PawLazyField>`,
            type: 'dynamic',
        }
    }
}

export const WrongFormattedDate = Template.bind({});
WrongFormattedDate.args = {
    label: 'Lazy Field Wrong Formatted Date',
    info: 'Info',
    title: 'Extended information about this field',
    format: 'date',
    default: 'Monday, 28.3 2022',
};
WrongFormattedDate.parameters = {
    docs: {
        source: {
            code: `
<PawLazyField${componentProps(WrongFormattedDate.args)}>${WrongFormattedDate.args.default}</PawLazyField>`,
            type: 'dynamic',
        }
    }
}

export const Address = Template.bind({});
Address.args = {
    label: 'Lazy Field Address',
    info: 'Info',
    title: 'Extended information about this field',
    copy: true,
    format: 'multiline',
    default: `Güterstrasse 133
4053 Basel
Schweiz`,
};
Address.parameters = {
    docs: {
        source: {
            code: `
<PawLazyField${componentProps(Address.args)}>${Address.args.default}</PawLazyField>`,
            type: 'dynamic',
        }
    }
}

export const Card = Template.bind({});
Card.args = {
    label: 'Lazy Field Credit Card',
    info: 'Info',
    title: 'Extended information about this field',
    copy: true,
    secret: true,
    format: 'card',
    default: '4305 1899 0805 3550',
};
Card.parameters = {
    docs: {
        source: {
            code: `
<PawLazyField${componentProps(Card.args)}>${Card.args.default}</PawLazyField>`,
            type: 'dynamic',
        }
    }
}

export const Private = Template.bind({});
Private.args = {
    label: 'Lazy Field Private',
    info: 'Info',
    title: 'Extended information about this field',
    copy: true,
    secret: true,
    default: '39P6pnhXA4uyLru8YPfb',
};
Private.parameters = {
    docs: {
        source: {
            code: `
<PawLazyField${componentProps(Private.args)}>${Private.args.default}</PawLazyField>`,
            type: 'dynamic',
        }
    }
}

export const IBAN = Template.bind({});
IBAN.args = {
    label: 'Lazy Field Format IBAN',
    info: 'Info',
    title: 'Extended information about this field',
    copy: true,
    format: 'iban',
    default: 'CH31 8123 9000 0012 4568 9',
};
IBAN.parameters = {
    docs: {
        source: {
            code: `
<PawLazyField${componentProps(IBAN.args)}>${IBAN.args.default}</PawLazyField>`,
            type: 'dynamic',
        }
    }
}

export const Mail = Template.bind({});
Mail.args = {
    label: 'Lazy Field Action Mail',
    info: 'Info',
    title: 'Extended information about this field',
    copy: true,
    action: 'mail',
    default: 'mailname@domain.com',
};
Mail.parameters = {
    docs: {
        source: {
            code: `
<PawLazyField${componentProps(Mail.args)}>${Mail.args.default}</PawLazyField>`,
            type: 'dynamic',
        }
    }
}

export const Currency = Template.bind({});
Currency.args = {
    label: 'Lazy Field Format Currency',
    info: 'Info',
    title: 'Extended information about this field',
    unitLabel: 'CHF',
    unitIcon: 'toll',
    unitIconOutlined: true,
    format: 'number',
    default: '1998792.23',
};
Currency.parameters = {
    docs: {
        source: {
            code: `
<PawLazyField${componentProps(Currency.args)}>${Currency.args.default}</PawLazyField>`,
            type: 'dynamic',
        }
    }
}

export const Units = Template.bind({});
Units.args = {
    label: 'Lazy Field Format Units',
    info: 'Info',
    title: 'Extended information about this field',
    unitLabel: 'Paws',
    unitIcon: 'pets',
    unitIconOutlined: true,
    default: '3.14159265',
};
Units.parameters = {
    docs: {
        source: {
            code: `
<PawLazyField${componentProps(Units.args)}>${Units.args.default}</PawLazyField>`,
            type: 'dynamic',
        }
    }
}

export const Telephone = Template.bind({});
Telephone.args = {
    label: 'Lazy Field Action Telephone',
    info: 'Info',
    title: 'Extended information about this field',
    copy: true,
    action: 'phone',
    default: '+41 61 500 28 28',
};
Telephone.parameters = {
    docs: {
        source: {
            code: `
<PawLazyField${componentProps(Telephone.args)}>${Telephone.args.default}</PawLazyField>`,
            type: 'dynamic',
        }
    }
}

export const Link = Template.bind({});
Link.args = {
    label: 'Lazy Field Action Link',
    info: 'Info',
    title: 'Extended information about this field',
    action: 'link',
    default: 'revendo.com',
};
Link.parameters = {
    docs: {
        source: {
            code: `
<PawLazyField${componentProps(Link.args)}>${Link.args.default}</PawLazyField>`,
            type: 'dynamic',
        }
    }
}
