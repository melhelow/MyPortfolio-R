import React, { useState } from 'react';

const myProjects = [
  {
    title: 'RigRadar',
    image: 'https://rig-radar.onrender.com/assets/hero_truck-a15cb811.jpg',
    description: 'Helps long-haul drivers pre-plan routes by discovering Truck Stops, Rest Areas, and Weigh Stations within a configurable buffer around the pickup→drop-off corridor.',
    url: 'https://rig-radar.onrender.com//',
    github: 'https://github.com/melhelow/RigRadar',
    tags: ['Ruby on Rails', 'PostgreSQL', 'Maps API'],
    featured: true,
  },
  {
    title: 'CalPal',
    image: 'https://github.com/Bit-Bandits/client/raw/main/src/assets/logo.png',
    description: 'A calorie counting web app that lets users search foods via the Edamam API and track weekly intake with a beautiful bar graph dashboard.',
    url: 'https://calpal-d266c388df3c.herokuapp.com/',
    github: 'https://github.com/orgs/Bit-Bandits/repositories',
    tags: ['React', 'GraphQL', 'MongoDB'],
    featured: true,
  },
  {
    title: 'Plant Pedia',
    image: 'https://avatars.githubusercontent.com/u/132026629?s=200&v=4',
    description: 'Search for plants, save favorites, and view weather-matched plant recommendations for your local area.',
    url: 'https://plantpedia.herokuapp.com/',
    github: 'https://github.com/nextCentury-coders/Plant-pedia',
    tags: ['Handlebars', 'API Integration', 'Bootstrap'],
    featured: true,
  },
  {
    title: 'Password Generator',
    image: 'https://github.com/melhelow/03-hw/raw/main/assets/screenshot/deployed%202023-02-11%20164042.png',
    description: 'Generates random passwords based on user-selected criteria. Clean, responsive UI powered by vanilla JavaScript.',
    url: 'https://melhelow.github.io/password-generator/',
    github: 'https://github.com/melhelow/password-generator',
    tags: ['JavaScript', 'HTML', 'CSS'],
    featured: false,
  },
  {
    title: 'Time Quiz',
    image: 'https://github.com/melhelow/time-quiz/raw/main/assets/Screenshot%202023-02-21%20223647.png',
    description: 'Timed coding quiz with multiple-choice questions and a live countdown timer. Polished responsive UI.',
    url: 'https://melhelow.github.io/time-quiz/',
    github: 'https://github.com/melhelow/time-quiz',
    tags: ['JavaScript', 'DOM', 'CSS'],
    featured: false,
  },
  {
    title: 'Work Day Scheduler',
    image: 'https://github.com/melhelow/work-day-scheduler/raw/main/Develop/Screenshot%202023-02-25%20160852.png',
    description: 'Calendar app that lets users save events for each hour of the day with color-coded time blocks.',
    url: 'https://melhelow.github.io/work-day-scheduler/',
    github: 'https://github.com/melhelow/work-day-scheduler',
    tags: ['jQuery', 'LocalStorage', 'Bootstrap'],
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    image: 'https://github.com/melhelow/weather-dashboard/raw/main/develop/deployed-weather%20dashboard.png',
    description: 'Search any city and get current conditions plus a 5-day forecast, powered by OpenWeather API.',
    url: 'https://melhelow.github.io/weather-dashboard/',
    github: 'https://github.com/melhelow/weather-dashboard',
    tags: ['JavaScript', 'OpenWeather API', 'CSS'],
    featured: false,
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="animate-fade-in-up card-glow glass"
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        animationDelay: `${index * 0.08}s`,
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div
        style={{
          height: '200px',
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: hovered
              ? 'rgba(0,0,0,0.2)'
              : 'rgba(0,0,0,0.45)',
            transition: 'background 0.3s ease',
          }}
        />
        {project.featured && (
          <span
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
              borderRadius: '999px',
              padding: '4px 12px',
              fontSize: '11px',
              fontWeight: '700',
              color: '#000',
              letterSpacing: '0.04em',
            }}
          >
            FEATURED
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#fff', letterSpacing: '-0.3px' }}>
          {project.title}
        </h3>

        <p style={{ margin: 0, fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.7', flex: 1 }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: 'rgba(34,211,238,0.08)',
                border: '1px solid rgba(34,211,238,0.2)',
                borderRadius: '6px',
                padding: '3px 10px',
                fontSize: '12px',
                color: '#22d3ee',
                fontWeight: '500',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '10px', paddingTop: '8px' }}>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1,
              background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
              border: 'none',
              borderRadius: '10px',
              padding: '10px',
              fontSize: '13px',
              fontWeight: '700',
              color: '#000',
              textDecoration: 'none',
              textAlign: 'center',
              display: 'block',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Live Demo ↗
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '10px',
              padding: '10px 14px',
              fontSize: '18px',
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.2s ease, border-color 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
            title="GitHub"
          >
            <i className="fa-brands fa-github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <p
            className="animate-fade-in"
            style={{ fontSize: '13px', color: '#22d3ee', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px 0' }}
          >
            Portfolio
          </p>
          <h2
            className="animate-fade-in-up"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: '800', margin: '0 0 16px 0', letterSpacing: '-1.5px' }}
          >
            Things I've{' '}
            <span className="gradient-text">Built</span>
          </h2>
          <p
            className="animate-fade-in-up delay-100"
            style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', maxWidth: '520px', lineHeight: '1.7', margin: 0 }}
          >
            A collection of projects ranging from full-stack web apps to front-end experiments.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {myProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
