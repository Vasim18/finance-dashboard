import { useStore } from "../store/useStore";

export default function RoleSwitcher() {
  const { role, setRole } = useStore();

  return (
    <div className="flex items-center gap-3">
      <label className="font-semibold">Role:</label>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 rounded-md"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}