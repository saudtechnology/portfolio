import { brandCssCustomProperties } from '@/lib/site';

export function BrandStyles() {
	return <style dangerouslySetInnerHTML={{ __html: brandCssCustomProperties() }} />;
}
