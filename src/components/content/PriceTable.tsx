interface PriceTableProps {
  headers: string[];
  rows: string[][];
  caption?: string;
}

export function PriceTable({ headers, rows, caption }: PriceTableProps) {
  const isWide = headers.length >= 4;

  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-[var(--border)]">
      <table
        className={`w-full border-collapse text-sm ${isWide ? "min-w-[750px]" : ""}`}
      >
        {caption && (
          <caption className="text-left text-xs text-[var(--text-tertiary)] px-4 pt-3 pb-1">
            {caption}
          </caption>
        )}
        <thead>
          <tr className="bg-[#C7D2FE]/10 border-b-2 border-[#C7D2FE]/30">
            {headers.map((h, i) => (
              <th
                key={i}
                className={`text-left px-4 py-3 font-semibold text-[var(--text-primary)] text-sm ${
                  i === 0 && isWide ? "w-[28%]" : ""
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-[var(--border)] last:border-b-0 ${
                i % 2 === 0 ? "bg-white" : "bg-[var(--bg-secondary)]"
              }`}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 text-[var(--text-secondary)] ${
                    j === 0 ? "font-medium text-[var(--text-primary)]" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
