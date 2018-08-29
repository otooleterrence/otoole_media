import {typeMap, contentList} from './index';

export const getProjects = (type) => {
  if (type ===  'all') {
    return contentList;
  } else {
    return contentList.filter(project => project.type === type);
  }
}

export const getTypes = () => {
  return Object.keys(typeMap).map(key => {
    if (getProjects(typeMap[key]).length) {
      return typeMap[key];
    }
    return undefined;
  });
}

export const isDesktop = () => window.innerWidth >= 450;
