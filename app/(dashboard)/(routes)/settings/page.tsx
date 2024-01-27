import {Heading} from "@/components/heading";
import {Settings} from "lucide-react";

const SettingsPage = () => {


    return(
        <div>
            <Heading
            title="Settings"
            description="Menage account settings"
            icon={Settings}
            iconColor="text-gray-700"
            bg-color="bg-gray-700/10"
            />
        </div>
    )
}

export default SettingsPage