const EXPERIENCE_START_DATE = new Date(2020, 3, 1)

function getMonthsSinceStart(now: Date): number {
  let months =
    (now.getFullYear() - EXPERIENCE_START_DATE.getFullYear()) * 12 +
    (now.getMonth() - EXPERIENCE_START_DATE.getMonth())

  if (now.getDate() < EXPERIENCE_START_DATE.getDate()) {
    months -= 1
  }

  return Math.max(months, 0)
}

function resolveLocale(language: string): 'en' | 'es' {
  return language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function getExperienceDuration(language: string, now = new Date()): string {
  const locale = resolveLocale(language)
  const totalMonths = getMonthsSinceStart(now)
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  if (locale === 'es') {
    const yearLabel = years === 1 ? 'año' : 'años'
    const monthLabel = months === 1 ? 'mes' : 'meses'
    return `${years} ${yearLabel}, ${months} ${monthLabel}`
  }

  const yearLabel = years === 1 ? 'year' : 'years'
  const monthLabel = months === 1 ? 'month' : 'months'
  return `${years} ${yearLabel}, ${months} ${monthLabel}`
}