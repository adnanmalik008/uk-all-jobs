import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const categories = [
  { name: 'Technology', slug: 'technology' },
  { name: 'Healthcare', slug: 'healthcare' },
  { name: 'Finance', slug: 'finance' },
  { name: 'Marketing', slug: 'marketing' },
  { name: 'Education', slug: 'education' },
  { name: 'Engineering', slug: 'engineering' },
];

const locations = [
  { name: 'London', slug: 'london' },
  { name: 'Manchester', slug: 'manchester' },
  { name: 'Birmingham', slug: 'birmingham' },
  { name: 'Edinburgh', slug: 'edinburgh' },
  { name: 'Glasgow', slug: 'glasgow' },
  { name: 'Liverpool', slug: 'liverpool' },
];

const companies = [
  'TechCorp UK',
  'Digital Innovations Ltd',
  'Healthcare Solutions',
  'FinanceFirst',
  'EduLearn Academy',
  'BuildRight Engineering',
  'MarketPro Agency',
  'CloudScale Systems',
  'MediCare Plus',
  'InvestSmart Capital',
  'TeachForward',
  'StructureWorks',
];

const jobTypes = ['FULL_TIME', 'PART_TIME', 'CONTRACT', 'TEMPORARY', 'INTERNSHIP'];
const workModes = ['ONSITE', 'REMOTE', 'HYBRID'];

const jobTemplates = {
  technology: [
    { title: 'Senior Software Engineer', salary: '£65,000 - £85,000', description: 'We are looking for an experienced Senior Software Engineer to join our growing team. You will be responsible for designing, developing, and maintaining high-quality software solutions.\n\nResponsibilities:\n- Design and implement scalable software solutions\n- Code review and mentoring junior developers\n- Collaborate with product and design teams\n- Write clean, maintainable, and well-documented code\n\nRequirements:\n- 5+ years of software development experience\n- Strong proficiency in JavaScript/TypeScript\n- Experience with React, Node.js, or similar technologies\n- Excellent problem-solving skills' },
    { title: 'Full Stack Developer', salary: '£50,000 - £70,000', description: 'Join our innovative team as a Full Stack Developer. You will work on exciting projects using modern technologies.\n\nResponsibilities:\n- Develop and maintain web applications\n- Work with both frontend and backend technologies\n- Collaborate with cross-functional teams\n- Participate in code reviews\n\nRequirements:\n- 3+ years of full stack development experience\n- Experience with React, Vue, or Angular\n- Backend experience with Node.js, Python, or similar\n- Database experience (SQL and NoSQL)' },
    { title: 'DevOps Engineer', salary: '£55,000 - £75,000', description: 'We are seeking a skilled DevOps Engineer to help us build and maintain our cloud infrastructure.\n\nResponsibilities:\n- Design and implement CI/CD pipelines\n- Manage cloud infrastructure (AWS/Azure/GCP)\n- Monitor system performance and reliability\n- Automate deployment processes\n\nRequirements:\n- 3+ years of DevOps experience\n- Strong knowledge of Docker and Kubernetes\n- Experience with infrastructure as code (Terraform)\n- Linux system administration skills' },
    { title: 'Data Scientist', salary: '£60,000 - £80,000', description: 'Looking for a talented Data Scientist to help us derive insights from complex datasets.\n\nResponsibilities:\n- Analyze large datasets to identify patterns\n- Build and deploy machine learning models\n- Present findings to stakeholders\n- Collaborate with engineering teams\n\nRequirements:\n- Masters or PhD in relevant field\n- Strong Python and SQL skills\n- Experience with ML frameworks (TensorFlow, PyTorch)\n- Statistical analysis expertise' },
    { title: 'Frontend Developer', salary: '£45,000 - £60,000', description: 'Join us as a Frontend Developer to create beautiful, responsive user interfaces.\n\nResponsibilities:\n- Build responsive web applications\n- Implement pixel-perfect designs\n- Optimize application performance\n- Write unit and integration tests\n\nRequirements:\n- 2+ years of frontend development\n- Expert in React or Vue.js\n- Strong CSS/SCSS skills\n- Experience with TypeScript' },
  ],
  healthcare: [
    { title: 'Registered Nurse', salary: '£28,000 - £38,000', description: 'We are looking for compassionate Registered Nurses to join our healthcare team.\n\nResponsibilities:\n- Provide direct patient care\n- Administer medications and treatments\n- Monitor patient vital signs\n- Collaborate with medical team\n\nRequirements:\n- Valid NMC registration\n- BSc in Nursing or equivalent\n- Strong communication skills\n- Ability to work in a fast-paced environment' },
    { title: 'Healthcare Assistant', salary: '£22,000 - £26,000', description: 'Join our team as a Healthcare Assistant providing essential support to patients and nursing staff.\n\nResponsibilities:\n- Assist patients with daily activities\n- Support nursing staff with clinical tasks\n- Maintain patient records\n- Ensure patient comfort and safety\n\nRequirements:\n- NVQ Level 2/3 in Health and Social Care\n- Previous healthcare experience preferred\n- Good communication skills\n- Compassionate and patient-focused' },
    { title: 'Clinical Pharmacist', salary: '£45,000 - £60,000', description: 'Seeking an experienced Clinical Pharmacist to join our hospital pharmacy team.\n\nResponsibilities:\n- Review and verify prescriptions\n- Provide medication counseling\n- Collaborate with healthcare teams\n- Ensure medication safety\n\nRequirements:\n- MPharm degree and GPhC registration\n- Hospital pharmacy experience\n- Clinical diploma preferred\n- Strong attention to detail' },
    { title: 'Physiotherapist', salary: '£35,000 - £45,000', description: 'We are recruiting a Physiotherapist to help patients recover and improve mobility.\n\nResponsibilities:\n- Assess patient conditions\n- Develop treatment plans\n- Provide manual therapy\n- Track patient progress\n\nRequirements:\n- BSc in Physiotherapy\n- HCPC registration\n- Excellent interpersonal skills\n- MSK experience preferred' },
  ],
  finance: [
    { title: 'Financial Analyst', salary: '£40,000 - £55,000', description: 'Looking for a detail-oriented Financial Analyst to join our finance team.\n\nResponsibilities:\n- Analyze financial data and trends\n- Prepare financial reports and forecasts\n- Support budgeting processes\n- Present insights to stakeholders\n\nRequirements:\n- Degree in Finance or Accounting\n- 2+ years of financial analysis experience\n- Advanced Excel skills\n- Knowledge of financial modeling' },
    { title: 'Investment Manager', salary: '£70,000 - £100,000', description: 'Seeking an experienced Investment Manager to manage client portfolios.\n\nResponsibilities:\n- Manage investment portfolios\n- Develop investment strategies\n- Monitor market trends\n- Build client relationships\n\nRequirements:\n- CFA qualification\n- 5+ years of investment management\n- Strong analytical skills\n- Excellent communication abilities' },
    { title: 'Accountant', salary: '£35,000 - £50,000', description: 'Join our team as an Accountant to manage financial records and reporting.\n\nResponsibilities:\n- Prepare financial statements\n- Manage accounts payable/receivable\n- Ensure tax compliance\n- Support audit processes\n\nRequirements:\n- ACA, ACCA, or CIMA qualified\n- 2+ years of accounting experience\n- Strong attention to detail\n- Proficiency in accounting software' },
    { title: 'Risk Analyst', salary: '£45,000 - £65,000', description: 'We are looking for a Risk Analyst to identify and assess financial risks.\n\nResponsibilities:\n- Conduct risk assessments\n- Develop risk models\n- Monitor risk exposure\n- Prepare risk reports\n\nRequirements:\n- Degree in Finance, Mathematics, or related field\n- Experience with risk modeling\n- Strong quantitative skills\n- Knowledge of regulatory requirements' },
  ],
  marketing: [
    { title: 'Digital Marketing Manager', salary: '£45,000 - £60,000', description: 'Seeking a creative Digital Marketing Manager to lead our online marketing efforts.\n\nResponsibilities:\n- Develop digital marketing strategies\n- Manage social media campaigns\n- Analyze campaign performance\n- Lead marketing team\n\nRequirements:\n- 4+ years of digital marketing experience\n- Experience with Google Ads and social media\n- Strong analytical skills\n- Creative thinking ability' },
    { title: 'Content Writer', salary: '£28,000 - £38,000', description: 'Looking for a talented Content Writer to create engaging content across platforms.\n\nResponsibilities:\n- Write blog posts and articles\n- Create social media content\n- Develop email campaigns\n- Maintain brand voice\n\nRequirements:\n- Excellent writing skills\n- SEO knowledge\n- Experience with content management systems\n- Creativity and attention to detail' },
    { title: 'SEO Specialist', salary: '£35,000 - £50,000', description: 'Join us as an SEO Specialist to improve our search engine visibility.\n\nResponsibilities:\n- Conduct keyword research\n- Optimize website content\n- Build quality backlinks\n- Track and report on SEO metrics\n\nRequirements:\n- 2+ years of SEO experience\n- Knowledge of SEO tools (Ahrefs, SEMrush)\n- Understanding of technical SEO\n- Analytical mindset' },
    { title: 'Brand Manager', salary: '£50,000 - £70,000', description: 'We are recruiting a Brand Manager to develop and maintain our brand identity.\n\nResponsibilities:\n- Develop brand strategy\n- Manage brand guidelines\n- Coordinate marketing campaigns\n- Monitor brand performance\n\nRequirements:\n- 5+ years of brand management experience\n- Strong creative vision\n- Excellent project management skills\n- Strategic thinking ability' },
  ],
  education: [
    { title: 'Secondary School Teacher', salary: '£28,000 - £42,000', description: 'Passionate educators wanted to inspire the next generation of learners.\n\nResponsibilities:\n- Plan and deliver engaging lessons\n- Assess student progress\n- Support student development\n- Participate in school activities\n\nRequirements:\n- QTS qualification\n- Degree in relevant subject\n- Strong classroom management\n- Excellent communication skills' },
    { title: 'University Lecturer', salary: '£40,000 - £55,000', description: 'Seeking a University Lecturer to teach and conduct research in their field.\n\nResponsibilities:\n- Deliver lectures and seminars\n- Conduct research and publish papers\n- Supervise student projects\n- Contribute to curriculum development\n\nRequirements:\n- PhD in relevant field\n- Teaching experience\n- Published research\n- Excellent presentation skills' },
    { title: 'Teaching Assistant', salary: '£18,000 - £24,000', description: 'Join our school as a Teaching Assistant to support teachers and students.\n\nResponsibilities:\n- Support classroom learning\n- Assist with lesson preparation\n- Help students with special needs\n- Supervise students during breaks\n\nRequirements:\n- Level 2/3 Teaching Assistant qualification\n- Experience working with children\n- Patience and empathy\n- Good communication skills' },
    { title: 'Training Coordinator', salary: '£32,000 - £42,000', description: 'Looking for a Training Coordinator to manage our professional development programs.\n\nResponsibilities:\n- Design training programs\n- Coordinate training sessions\n- Track training effectiveness\n- Manage training budget\n\nRequirements:\n- Experience in L&D or training\n- Strong organizational skills\n- Excellent presentation abilities\n- Knowledge of e-learning platforms' },
  ],
  engineering: [
    { title: 'Mechanical Engineer', salary: '£40,000 - £55,000', description: 'We are looking for a skilled Mechanical Engineer to join our engineering team.\n\nResponsibilities:\n- Design mechanical systems\n- Conduct feasibility studies\n- Oversee manufacturing processes\n- Ensure quality standards\n\nRequirements:\n- BEng/MEng in Mechanical Engineering\n- 3+ years of experience\n- CAD software proficiency\n- Problem-solving skills' },
    { title: 'Civil Engineer', salary: '£38,000 - £52,000', description: 'Seeking a Civil Engineer to work on exciting infrastructure projects.\n\nResponsibilities:\n- Design civil structures\n- Manage construction projects\n- Ensure regulatory compliance\n- Conduct site inspections\n\nRequirements:\n- BEng in Civil Engineering\n- Chartered status preferred\n- Experience with AutoCAD\n- Project management skills' },
    { title: 'Electrical Engineer', salary: '£42,000 - £58,000', description: 'Join us as an Electrical Engineer to design and maintain electrical systems.\n\nResponsibilities:\n- Design electrical systems\n- Conduct testing and troubleshooting\n- Ensure safety compliance\n- Manage project timelines\n\nRequirements:\n- Degree in Electrical Engineering\n- IET membership preferred\n- Strong technical skills\n- Attention to detail' },
    { title: 'Project Engineer', salary: '£45,000 - £60,000', description: 'We are recruiting a Project Engineer to coordinate engineering projects.\n\nResponsibilities:\n- Plan and execute projects\n- Coordinate with teams\n- Monitor project progress\n- Manage project documentation\n\nRequirements:\n- Engineering degree\n- Project management experience\n- Strong communication skills\n- PMP certification advantageous' },
  ],
};

function generateSlug(title: string, company: string, index: number): string {
  return `${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index}`;
}

async function main() {
  console.log('Seeding database...');

  // Clear existing jobs
  await prisma.job.deleteMany();
  await prisma.category.deleteMany();
  await prisma.location.deleteMany();

  // Create categories
  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log('Categories created');

  // Create locations
  for (const location of locations) {
    await prisma.location.create({
      data: location,
    });
  }
  console.log('Locations created');

  // Create jobs
  let jobIndex = 0;
  for (const category of categories) {
    const templates = jobTemplates[category.slug as keyof typeof jobTemplates] || [];

    for (const template of templates) {
      // Create 2-3 variations of each job in different locations
      const numVariations = Math.floor(Math.random() * 2) + 2;
      const shuffledLocations = [...locations].sort(() => Math.random() - 0.5);

      for (let i = 0; i < numVariations && i < shuffledLocations.length; i++) {
        const location = shuffledLocations[i];
        const company = companies[Math.floor(Math.random() * companies.length)];
        const jobType = jobTypes[Math.floor(Math.random() * jobTypes.length)];
        const workMode = workModes[Math.floor(Math.random() * workModes.length)];
        const isFeatured = Math.random() < 0.15; // 15% chance of being featured

        jobIndex++;

        await prisma.job.create({
          data: {
            slug: generateSlug(template.title, company, jobIndex),
            title: template.title,
            company,
            description: template.description,
            location: location.name,
            locSlug: location.slug,
            category: category.name,
            catSlug: category.slug,
            jobType,
            workMode,
            salary: template.salary,
            applyUrl: `https://example.com/apply/${jobIndex}`,
            isActive: true,
            isFeatured,
          },
        });
      }
    }
  }

  console.log(`Created ${jobIndex} jobs`);

  // Update category job counts
  for (const category of categories) {
    const count = await prisma.job.count({
      where: { catSlug: category.slug, isActive: true },
    });
    await prisma.category.update({
      where: { slug: category.slug },
      data: { jobCount: count },
    });
  }

  // Update location job counts
  for (const location of locations) {
    const count = await prisma.job.count({
      where: { locSlug: location.slug, isActive: true },
    });
    await prisma.location.update({
      where: { slug: location.slug },
      data: { jobCount: count },
    });
  }

  console.log('Job counts updated');
  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
