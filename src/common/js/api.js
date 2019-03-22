import { httpGet } from '@/common/js/util';
import { url } from '@/common/js/url';

export function getBannerList(params) {
  return httpGet(url.bannerList, params)
}