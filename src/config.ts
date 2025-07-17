import { WebhookClient } from "discord.js";
import ms from "ms";

export default {
    // Bot configuration
    token: "MTM5NTQ3MDIwNjI5NzU3NTQyNA.GC7HuT.fvmilcCGfKbcuQvdWl2PDigwXh_KrHm0JN-Gmo",    prefix: "-", // Bot prefix (currently unused)

    // MongoDB connection URI
    mongoDB: "mongodb+srv://Questor:athenaonfire@cluster0.r3iqow1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",

    // Custom reward images by type key
    rewardImages: {
        "PLACEHOLDER": "https://i.ibb.co/rRNztwKq/reward.webp",
    },

    // Reward types with associated numeric ID
    rewardTypes: {
        5: "Nitro",
        3: "Discord item",
    },

    // Guilds allowed to use the bot
    whiteListedGuildes: ["1238430819903737947"],

    // Self account token (used for additional Discord API actions; keep private)
    selfAccountToken: "MTExMDkwNDA0MzE3NTQyODE2OA.G1sSKy.TAIkq5lbCAV0DhquI_2LuehFlM-RoPGWxMooTQ",

    // Available quest types
    quests: [
        "WATCH_VIDEO",
        "PLAY_ON_DESKTOP",
        "STREAM_ON_DESKTOP",
        "PLAY_ACTIVITY",
        "WATCH_VIDEO_ON_MOBILE"
    ],

    // Event types tracked by the bot
    events: [
        "STREAM_ON_DESKTOP",
        "PLAY_ON_DESKTOP",
        "PLAY_ON_PLAYSTATION",
        "PLAY_ON_XBOX",
        "WATCH_VIDEO",
        "WATCH_VIDEO_ON_MOBILE"
    ],

    // Max number of quests a user can take simultaneously
    questsLimit: 15,

    // Minimum duration required to complete a quest
    minQuestTime: ms("30m"),

    // Initial log string on bot start or quest start
    logString: "Developed by 7xr For Euiz Server",

    // Notification settings (e.g. for role pings or logs)
    notification: {
        sendDm: true, // Send DM to users on quest notifications
        serverid: "1238430819903737947", // Server for notifications
        channelid: "1371923994726502420", // Notification channel ID
        role: "1369946749593976902" // Role to mention
    },

    // Server-specific settings related to quest interaction
    server: {
        serverid: "1238430819903737947", // Main server ID
        channelid: "1370218358695399424", // Voice channel ID required
        roleId: "1370219137514606732", // Role needed to participate
        logChannel: "1369693493622214778", // Channel for internal logs

        // Message shown when a user isn't in the server
        joinMessage: `## انت مو داخل السيرفر
- **عشان تستعمل البوت لازم تدخل السيرفر ب الحساب الي تبي تسوي فيه المهمة**
- **ملاحظة البوت مجاني 100%**

## You are not in the server
- **To use the bot, you need to join the server with the account you want to complete the task with.**
- **Note: The bot is 100% free.**

- ** https://discord.gg/39c2c3jVbN **`
    },

    // Webhook used for image uploads/logs (move to .env)
    WebhookUrl: new WebhookClient({
        url: process.env.WEBHOOK_URL || "https://discord.com/api/webhooks/1372970597339893911/WnGPsT6YfRtjBGOn2PF0ki6gXLNYkpq6Wuf5MXYZ3X0n0eh2Tx4kXmRTX_n7fabQNzFF" // Secure in environment variable
    }),

    // Developer-only access mode
    debugMode: false,

    // Accepted video formats for video quests
    videoFormats: [".mp4", ".mov", ".avi", ".mkv", ".webm"],

    // Developer IDs with full access to bot
    devlopers: [
        "656871811186819082", // Main dev
        ""  // Co-dev/support
    ],

    // Button section shown in bot embeds
    withButtons: {
        active: true,
        buttons: [
            {
                url: "https://youtu.be/eJoa4obHhng", // Tutorial or guide
                emoji: "📺",
                text: "How To Use"
            }
        ]
    },
};
