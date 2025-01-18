import { DetailOfferPage } from "../../DetailOfferPage";

const Page = () => {
  return (
    <DetailOfferPage
      heroImage="/images/altanok/altanok-def.png"
      title="Altánok DEF"
      column1={{
        title: "Štandard realizácie",
        textChild: <div className="text-[#5f5f5f] space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sem nulla. Cras consequat felis nibh, elementum maximus erat venenatis eget. Vivamus maximus eu leo ut sagittis. Nullam in porta velit, et dapibus magna. Ut faucibus diam a tellus iaculis, ac tempor odio rutrum. Suspendisse ac faucibus massa. Donec posuere velit dolor, eget porttitor turpis luctus nec. Donec tristique eros id felis bibendum placerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel sem nulla. Cras consequat felis nibh, elementum maximus erat venenatis eget. Vivamus maximus eu leo ut sagittis. Nullam in porta velit, et dapibus magna. Ut faucibus diam a tellus iaculis, ac tempor odio rutrum. Suspendisse ac faucibus massa. Donec posuere velit dolor, eget porttitor turpis luctus nec. Donec tristique eros id felis bibendum placerat.
          </p>

        </div>
      }}
      column2={{
        title: "obľúbené doplnky",
        textChild:
          <div>
            <ul>
              <li>vedenie elektroinštalácie v trámoch</li>
              <li>integrované ambientné osvetlenie</li>
              <li>vonkajšie sedenie prispôsobené rozmerom prístrešku</li>
              <li>strešné okná / svetlíky</li>
            </ul>
          </div>
      }}

      iframeUrl="https://app.sketchup.com/viewer/3dw?WarehouseModelId=d3bea8df-7238-470a-81b6-bd1d7a225d85"

      illustrationImages={["/images/zahradny-domcek/def.png"]}
    />
  )
}


export default Page;