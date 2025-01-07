
export interface TStudioItem {
    slug: string;
    name: string;
    image: string;
    description: string[];
    price: string;
    descriptionTitle: string;
    otherMedia: string[];
    specification: string[];
    priceNote: string;
}


const studioData: TStudioItem[] = [
    {
        slug: "soliterny-pnik",
        name: "Solitérny pník",
        image: "/images/studio/soliterny-pnik.png",
        description: [
            "Vhodný do štúdia, kancelárie, obývačky, spálne, detskej izby, či chodby. Výška 50 cm, priemer 30 cm. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sem nulla. Cras consequat felis nibh, elementum maximus erat venenatis eget. Vivamus maximus eu leo ut sagittis. Nullam in porta velit, et dapibus magna. Ut faucibus diam a tellus iaculis, ac tempor odio rutrum. Suspendisse ac faucibus massa. Donec posuere velit dolor, eget porttitor turpis luctus nec. Donec tristique eros id felis bibendum placerat.",
            "Vhodný do štúdia, kancelárie, obývačky, spálne, detskej izby, či chodby. Výška 50 cm, priemer 30 cm. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sem nulla. Cras consequat felis nibh, elementum maxim"
        ],
        price: "750 €",
        descriptionTitle: "Štandard realizácie",
        otherMedia: [
            "/images/studio/soliterny-pnik.png",
            "/images/studio/soliterny-pnik.png",
        ],
        specification: [
            "Materiál: drevo",
            "Farba: biela",
            "Výška: 50 cm",
            "Priemer: 30 cm",
        ],
        priceNote: "Cena zahŕňa aj dopravu a montáž."
    },

    {
        name: 'Doska na krájanie',
        image: '/images/studio/doska-na-krajanie.png',
        description: [
            "Vhodný do štúdia, kancelárie, obývačky, spálne, detskej izby, či chodby. Výška 50 cm, priemer 30 cm. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sem nulla. Cras consequat felis nibh, elementum maximus erat venenatis eget. Vivamus maximus eu leo ut sagittis. Nullam in porta velit, et dapibus magna. Ut faucibus diam a tellus iaculis, ac tempor odio rutrum. Suspendisse ac faucibus massa. Donec posuere velit dolor, eget porttitor turpis luctus nec. Donec tristique eros id felis bibendum placerat.",
            "Vhodný do štúdia, kancelárie, obývačky, spálne, detskej izby, či chodby. Výška 50 cm, priemer 30 cm. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sem nulla. Cras consequat felis nibh, elementum maxim"
        ], slug: 'doska-na-krajanie',
        price: '250 €',
        descriptionTitle: "Štandard realizácie",
        otherMedia: [
            "/images/studio/soliterny-pnik.png", "/images/studio/soliterny-pnik.png",
        ],
        specification: [
            "Materiál: drevo",
            "Farba: biela",
            "Výška: 50 cm",
            "Priemer: 30 cm",
        ],
        priceNote: "Cena zahŕňa aj dopravu a montáž."

    },
    {
        name: "Dizajnové sedadlo",
        image: "/images/studio/dizajnove-sedadlo.png",
        description: [
            "Vhodný do štúdia, kancelárie, obývačky, spálne, detskej izby, či chodby. Výška 50 cm, priemer 30 cm. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sem nulla. Cras consequat felis nibh, elementum maximus erat venenatis eget. Vivamus maximus eu leo ut sagittis. Nullam in porta velit, et dapibus magna. Ut faucibus diam a tellus iaculis, ac tempor odio rutrum. Suspendisse ac faucibus massa. Donec posuere velit dolor, eget porttitor turpis luctus nec. Donec tristique eros id felis bibendum placerat.",
            "Vhodný do štúdia, kancelárie, obývačky, spálne, detskej izby, či chodby. Výška 50 cm, priemer 30 cm. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sem nulla. Cras consequat felis nibh, elementum maxim"
        ], slug: "dizajnove-sedadlo",
        price: "350 €",
        descriptionTitle: "Štandard realizácie",
        otherMedia: [
            "/images/studio/soliterny-pnik.png", "/images/studio/soliterny-pnik.png",
        ],
        specification: [
            "Materiál: drevo",
            "Farba: biela",
            "Výška: 50 cm",
            "Priemer: 30 cm",
        ],
        priceNote: "Cena zahŕňa aj dopravu a montáž."

    },
    {
        name: "Drevený stolík",
        image: "/images/studio/stolik.png",
        description: [
            "Vhodný do štúdia, kancelárie, obývačky, spálne, detskej izby, či chodby. Výška 50 cm, priemer 30 cm. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sem nulla. Cras consequat felis nibh, elementum maximus erat venenatis eget. Vivamus maximus eu leo ut sagittis. Nullam in porta velit, et dapibus magna. Ut faucibus diam a tellus iaculis, ac tempor odio rutrum. Suspendisse ac faucibus massa. Donec posuere velit dolor, eget porttitor turpis luctus nec. Donec tristique eros id felis bibendum placerat.",
            "Vhodný do štúdia, kancelárie, obývačky, spálne, detskej izby, či chodby. Výška 50 cm, priemer 30 cm. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sem nulla. Cras consequat felis nibh, elementum maxim"
        ], slug: "stolik",
        price: "450 €",
        descriptionTitle: "Štandard realizácie",
        otherMedia: [
            "/images/studio/soliterny-pnik.png", "/images/studio/soliterny-pnik.png",
        ],
        specification: [
            "Materiál: drevo",
            "Farba: biela",
            "Výška: 50 cm",
            "Priemer: 30 cm",
        ],
        priceNote: "Cena zahŕňa aj dopravu a montáž."
    }
]

export const getStudioItem = (slug: string) => {
    return studioData.find((item) => item.slug === slug);
}
export default studioData;

