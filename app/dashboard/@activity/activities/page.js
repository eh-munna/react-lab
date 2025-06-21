import CustomLink from '@/components/CustomLink';

export default function AllActivity() {
  const activities = [
    '✅ Task completed: Fix login bug',
    '📥 Message from Project Manager',
    '🚀 Deployment finished',
    '🔔 Alert: High server load',
  ];

  return (
    <>
      <ul className="list-disc pl-5 space-y-2">
        {activities.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <div className="mt-6">
        <ul>
          <li>
            <CustomLink href="/dashboard">
              <span>Back to dashboard</span>
            </CustomLink>
          </li>
        </ul>
      </div>
    </>
  );
}
