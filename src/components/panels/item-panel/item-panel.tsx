import { CampaignSetting } from '../../../models/campaign-setting';
import { FeaturePanel } from '../feature-panel/feature-panel';
import { HeaderText } from '../../controls/header-text/header-text';
import { Hero } from '../../../models/hero';
import { Item } from '../../../models/item';
import { PanelMode } from '../../../enums/panel-mode';

import './item-panel.scss';

interface Props {
	item: Item;
	hero?: Hero;
	campaignSettings?: CampaignSetting[];
	mode?: PanelMode;
}

export const ItemPanel = (props: Props) => {
	try {
		return (
			<div className='item-panel' id={props.mode === PanelMode.Full ? props.item.id : undefined}>
				<HeaderText level={1}>{props.item.name || 'Unnamed Item'}</HeaderText>
				<div className='ds-text description-text'>{props.item.description}</div>
				{
					props.mode === PanelMode.Full ?
						props.item.features.map(f => <FeaturePanel key={f.id} feature={f} hero={props.hero} campaignSettings={props.campaignSettings} mode={PanelMode.Full} />)
						: null
				}
			</div>
		);
	} catch (ex) {
		console.error(ex);
		return null;
	}
};
