import CustomLink from '@/components/CustomLink';
export default function ActivityPanel() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Recent Activity</h2>
      <ul className="space-y-2">
        <li>✅ Task completed</li>
        <li>📥 New message received</li>
        <li>🔔 Notification sent</li>
      </ul>

      <div className="mt-6">
        <ul>
          <li>
            <CustomLink href="/dashboard/activities">
              <span>See all activities</span>
            </CustomLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
