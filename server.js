const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({
    name: "Ayomide [Your Last Name]",
    role: "Lead Cloud Engineer",
    project: "The Future of AI-Powered Logistics",
    pitch: "Our web application security solution protects online platforms from cyber threats by implementing robust security measures, including encryption, authentication, and vulnerability assessment. With a focus on proactive defense, we're safeguarding the digital landscape.",
    bio: "Hi, I'm Giwa Ayomide, a skilled web developer and cloud engineer with expertise in designing scalable, secure, and efficient web applications. With experience in cloud platforms like AWS, Azure, or Google Cloud, I've developed and deployed various web applications. My skills include HTML, CSS, JavaScript, React, Node.js, and cloud infrastructure management."
  });
});

app.listen(3000, () => console.log('Server running on port 3000'));
