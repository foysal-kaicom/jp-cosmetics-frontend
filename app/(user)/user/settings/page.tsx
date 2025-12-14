import SettingItem from "@/components/user/SettingItem";

export default function Settings() {
    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
                    <p className="text-gray-600 mt-2">Manage your account preferences and security</p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
                    
                    <div className="space-y-6">
                        <SettingItem
                            title="Personal Information"
                            description="Update your name, email, and phone number"
                        />
                        <SettingItem
                            title="Password & Security"
                            description="Change your password and security settings"
                        />
                        <SettingItem
                            title="Notifications"
                            description="Manage email and push notifications"
                        />
                        <SettingItem
                            title="Privacy"
                            description="Control your privacy and data preferences"
                        />
                        <SettingItem
                            title="Delete Account"
                            description="Permanently delete your account and data"
                            danger
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}