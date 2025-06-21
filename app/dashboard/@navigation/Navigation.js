import CustomLink from '@/components/CustomLink';

export default function Navigation() {
  return (
    <nav>
      <h2 className="text-xl font-bold mb-2">Navigation</h2>
      <ul className="space-y-1">
        <li>
          <CustomLink href="/">
            <span>🏠 Home</span>
          </CustomLink>
        </li>
        <li>
          <CustomLink href="/dashboard">
            <span>📊 Dashboard</span>
          </CustomLink>
        </li>
        <li>
          <CustomLink href="/contact">
            <span>👤 Contact</span>
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
}
