import {
  LITERATURE,
  AUTHORS,
  JOBS,
  CONFERENCES,
  SEMINARS,
  INSTITUTIONS,
  EXPERIMENTS,
} from '../common/routes';

export const AUTHORS_NS = 'authors';
export const LITERATURE_NS = 'literature';
export const JOBS_NS = 'jobs';
export const AUTHOR_PUBLICATIONS_NS = 'authorPublications';
export const AUTHOR_CITATIONS_NS = 'authorCitations';
export const CONFERENCE_CONTRIBUTIONS_NS = 'conferenceContributions';
export const CONFERENCES_NS = 'conferences';
export const EXISTING_CONFERENCES_NS = 'existingConferences';
export const INSTITUTIONS_NS = 'institutions';
export const INSTITUTION_PAPERS_NS = 'institutionPapers';
export const SEMINARS_NS = 'seminars';
export const EXPERIMENTS_NS = 'experiments';
export const EXPERIMENT_PAPERS_NS = 'experimentPapers';

export const SEARCH_BOX_NAMESPACES = [
  LITERATURE_NS,
  AUTHORS_NS,
  JOBS_NS,
  SEMINARS_NS,
  CONFERENCES_NS,
  INSTITUTIONS_NS,
];

export const SEARCHABLE_COLLECTION_PATHNAMES = [
  LITERATURE,
  AUTHORS,
  JOBS,
  SEMINARS,
  CONFERENCES,
  INSTITUTIONS,
  EXPERIMENTS,
];

export const NAMESPACE_TO_PATHNAME = {
  [LITERATURE_NS]: LITERATURE,

  [AUTHOR_PUBLICATIONS_NS]: LITERATURE,
  [AUTHOR_CITATIONS_NS]: LITERATURE,
  [CONFERENCE_CONTRIBUTIONS_NS]: LITERATURE,
  [INSTITUTION_PAPERS_NS]: LITERATURE,
  [EXISTING_CONFERENCES_NS]: CONFERENCES_NS,
  [EXPERIMENT_PAPERS_NS]: LITERATURE,

  [AUTHORS_NS]: AUTHORS,
  [JOBS_NS]: JOBS,
  [SEMINARS_NS]: SEMINARS,
  [CONFERENCES_NS]: CONFERENCES,
  [INSTITUTIONS_NS]: INSTITUTIONS,
  [EXPERIMENTS_NS]: EXPERIMENTS,
};
