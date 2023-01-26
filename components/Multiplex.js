import styled from 'styled-components';
import { useEffect } from 'react';

export function GoogleAdsenseContainer({ client, slot }) {

    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    const AdLabel = styled.span`
    font-size: 12px;
  `

    return (
        <div
            style={{ textAlign: 'left', overflow: 'hidden' }}
        >
            <AdLabel>Advertisment</AdLabel>
            <ins class="adsbygoogle"
                style="display:block"
                data-ad-format="autorelaxed"
                data-ad-client="ca-pub-3594293377588314"
                data-ad-slot="4949879669">
            </ins>
        </div>
    );
}
