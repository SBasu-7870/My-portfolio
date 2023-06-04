import { useEffect, useState } from 'react';




function GithubComponent() {
  const [svgData, setSvgData] = useState('');

  useEffect(() => {
    // Fetch the SVG from the API endpoint
    fetch('https://github-readme-stats.vercel.app/api?username=SBasu-7870&theme=algolia&show_icons=true')
      .then((response) => response.text())
      .then((data) => {
        setSvgData(data);
      })
      .catch((error) => {
        console.error('Error fetching SVG:', error);
      });
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: svgData }}></div>
    </div>
  )
}

export default GithubComponent