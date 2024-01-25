import {auth} from "@clerk/nextjs"

import prismadb from "@/lib/prismadb";

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
    const {userId} = await auth()

    if (!userId) {
        return null
    }

    const subscription = await prismadb.userSubscription.findUnique({
        where: {
            userId
        },
        select: {
            stripeSubscriptionId: true,
        }
    })

}