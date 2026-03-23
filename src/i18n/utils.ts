import { ui, defaultLang, chapters, annexes, type Lang, type Chapter, type ChapterSection, type AnnexItem } from "./translations";

export function t(lang: Lang, key: string): string {
  return ui[lang]?.[key] || ui[defaultLang]?.[key] || key;
}

export function getChapters(): Chapter[] { return chapters; }
export function getChapter(num: number): Chapter | undefined { return chapters.find((c) => c.num === num); }
export function getAnnexes(): AnnexItem[] { return annexes; }

export function getAlternateUrl(currentPath: string, targetLang: Lang): string {
  const parts = currentPath.split("/").filter(Boolean);
  if (parts[0] === "ne" || parts[0] === "en") parts[0] = targetLang;
  else parts.unshift(targetLang);
  return "/" + parts.join("/");
}

export function toNepaliDigits(num: string | number): string {
  const nepaliDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
  return num.toString().replace(/\d/g, (digit) => nepaliDigits[parseInt(digit)]);
}

export function formatSectionId(id: string, lang: Lang = "ne"): string {
  const formatted = id.replace(/-/g, ".");
  if (lang === "ne") {
    return toNepaliDigits(formatted);
  }
  return formatted;
}

export interface FlatSection {
  chapterNum: number;
  chapterSlug: string;
  section: ChapterSection;
  parentId?: string;
}

export function getAllSections(): FlatSection[] {
  const result: FlatSection[] = [];
  for (const ch of chapters) {
    for (const sec of ch.sections) {
      result.push({ chapterNum: ch.num, chapterSlug: ch.slug, section: sec });
      if (sec.children) {
        for (const child of sec.children) {
          result.push({ chapterNum: ch.num, chapterSlug: ch.slug, section: child, parentId: sec.id });
        }
      }
    }
  }
  return result;
}

export function getSectionUrl(lang: Lang, chapterSlug: string, sectionSlug: string): string {
  return `/${lang}/${chapterSlug}/${sectionSlug}`;
}
