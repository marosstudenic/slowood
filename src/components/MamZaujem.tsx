import { cn } from "@/lib/utils"
import { LinkButton } from "./LinkButton"

export const MamZaujem = ({ isRow = false }: { isRow?: boolean }) => {
    return (
        <div className="space-y-2">
            <h3 className="text-black text-lg uppercase font-bold">Mám záujem</h3>
            <div className={cn("flex gap-4 flex-row", isRow ? "md:flex-row" : "md:flex-col")}>
                <LinkButton link="mailto:simon.slowood@gmail.com" className="border-black max-md:!w-full" text={"poslať email"} color="black" weight="thin" />
                <LinkButton link="tel:+421912987654" className="border-black max-md:!w-full" text={"telefonovať"} color="black" weight="thin" />
            </div>
        </div>
    )
}