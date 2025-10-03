import React from "react";
import "./StatsGrid.scss";

interface StatItem {
  icon: string;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: "⛪", value: "16", label: "Tôn giáo" },
  { icon: "🏢", value: "43", label: "Tổ chức" },
  { icon: "🧑‍⚖️", value: "57K+", label: "Chức sắc" },
  { icon: "👥", value: "157K+", label: "Chức việc" },
  { icon: "🏛️", value: "29K+", label: "Cơ sở thờ tự" },
];

const StatsGrid: React.FC = () => {
  return (
    <div className="stats-container">
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div
            className="stat-card"
            key={index}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <span className="stat-icon">{stat.icon}</span>
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
      <p className="stats-source">
        Nguồn: Báo Nhân dân điện tử, 22/12/2020
      </p>
    </div>
  );
};

export default StatsGrid;
