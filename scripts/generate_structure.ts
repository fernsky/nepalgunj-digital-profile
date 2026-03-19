import fs from 'fs';
import path from 'path';
import { chapters } from './src/i18n/translations.ts';

const baseDir = process.cwd();

chapters.forEach(chapter => {
  const chapterDir = path.join(baseDir, 'src/components/chapters', String(chapter.num));
  if (!fs.existsSync(chapterDir)) fs.mkdirSync(chapterDir, { recursive: true });

  const i18nChapterDir = path.join(baseDir, 'src/lib/i18n/chapters', String(chapter.num));
  if (!fs.existsSync(i18nChapterDir)) fs.mkdirSync(i18nChapterDir, { recursive: true });

  // Create Hero i18n
  const heroDir = path.join(i18nChapterDir, 'hero');
  if (!fs.existsSync(heroDir)) fs.mkdirSync(heroDir, { recursive: true });
  fs.writeFileSync(path.join(heroDir, 'ne.json'), JSON.stringify({ title: chapter.title.ne, sectionNumber: String(chapter.num), content: chapter.description.ne }, null, 2));
  fs.writeFileSync(path.join(heroDir, 'en.json'), JSON.stringify({ title: chapter.title.en, sectionNumber: String(chapter.num), content: chapter.description.en }, null, 2));

  chapter.sections.forEach(section => {
    createSectionFiles(chapter.num, section, chapterDir, i18nChapterDir);
    if (section.children) {
      section.children.forEach(child => {
        createSectionFiles(chapter.num, child, chapterDir, i18nChapterDir);
      });
    }
  });
});

function createSectionFiles(chapterNum, section, compDir, i18nDir) {
  const sectionSlug = section.slug;
  const sectionId = section.id.replace(/-/g, '.');

  // Create i18n
  const sectionI18nDir = path.join(i18nDir, sectionSlug);
  if (!fs.existsSync(sectionI18nDir)) fs.mkdirSync(sectionI18nDir, { recursive: true });
  fs.writeFileSync(path.join(sectionI18nDir, 'ne.json'), JSON.stringify({ title: section.title.ne, sectionNumber: sectionId, content: "" }, null, 2));
  fs.writeFileSync(path.join(sectionI18nDir, 'en.json'), JSON.stringify({ title: section.title.en, sectionNumber: sectionId, content: "" }, null, 2));

  // Create Component (CamelCase name)
  const compName = sectionSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + '.astro';
  const compPath = path.join(compDir, compName);
  if (!fs.existsSync(compPath)) {
    const compContent = `---
interface Props {
  content: any;
}
const { content } = Astro.props;
---
<div class="prose prose-invert max-w-none">
  <h2 class="text-2xl font-bold mb-4" style="color:var(--text-heading);">{content.sectionNumber} {content.title}</h2>
  <div class="text-lg leading-relaxed" style="color:var(--text-body);">
    {content.content || "Content coming soon..."}
  </div>
</div>
`;
    fs.writeFileSync(compPath, compContent);
  }
}
