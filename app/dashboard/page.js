'use client';

import { useRouter } from 'next/navigation';
import Button from '../components/Button';

export default function DashboardHome() {
  const navigate = useRouter();

  const handleNavigate = () => {
    navigate.push('/dashboard/settings');
  };

  return (
    <>
      <h3 className="text-2xl font-bold text-center text-green-400">
        Welcome to Dashboard
      </h3>

      <p className="text-center text-gray-500">
        This is the dashboard home page. You can navigate to different sections
        of the dashboard using the links provided in the sidebar.
      </p>

      <Button
        onClick={handleNavigate}
        type="button"
        className="cursor-pointer mt-6 bg-blue-700 hover:bg-blue-600 px-4 py-3 text-white rounded-md transition-colors duration-150"
      >
        Click to Navigate: Settings
      </Button>
    </>
  );
}
