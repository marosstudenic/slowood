import { LinkButton } from "./LinkButton"

export const SledujteNas = () => {
    return (
        <div className="pt-4">
            <h3 className="text-lg font-bold uppercase px-6 pb-2">Sledujte nás</h3>

            <div className="flex gap-2 px-6">
                <LinkButton
                    link="https://www.instagram.com/slowood.sk/"
                    text="Instagram"
                    color="black"
                    weight="thin"
                    className="border-black max-md:!w-full"
                />

                <LinkButton
                    link="https://www.facebook.com/slowood.sk"
                    text="Facebook"
                    color="black"
                    weight="thin"
                    className="border-black max-md:!w-full"
                />
            </div>
        </div>
    )
}