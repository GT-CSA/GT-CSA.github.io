import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'

import * as styles from './board-application-blob.module.css'
import Container from './container'

const boardApplicationBlob = ({ meta }) => (
  <Container className={styles.container}>
    <Blob />
    <div className={styles.content}>
      <h2>{meta.title}</h2>
      {meta.description && <div>{renderRichText(meta.description)}</div>}
      <a
        href={meta.positionDescriptionLink.positionDescriptionLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className={styles.link}>Position Descriptions</p>
      </a>
      <a
        href={meta.applicationLink.applicationLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className={`${styles.link} ${styles.second}`}>Application</p>
      </a>
    </div>
  </Container>
)

const Blob = () => (
  <div className={styles.blobContainer}>
    <div>
      <svg
        viewBox="0 0 1440 755"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.short}
      >
        <defs>
          <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="40%" stop-color="rgba(209, 78, 96, 85)" />
            <stop offset="100%" stop-color="rgba(245, 188, 86, 85)" />
          </linearGradient>
        </defs>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M766.719 24.8565C992.489 1.01531 1372.1 -33.1639 1501.3 72.6907C1614.16 165.159 1460.62 206.351 1474.8 317.887C1491.17 446.586 1586.29 616.439 1418.36 705.296C1249.64 794.567 980.351 738.918 748.796 726.09C560.155 715.64 352.531 740.905 193.063 726.09C-11.335 732.214 -140.039 520.72 -105.374 401.263C-71.8746 285.824 -155.524 146.187 -11.258 61.2372C142.016 -29.0165 547.588 47.9967 766.719 24.8565Z"
          fill="url(#gradient)"
        />
      </svg>
      <svg
        viewBox="0 0 428 678"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.long}
      >
        <defs>
          <linearGradient id="gradient2" x1="0" x2="0" y1="0" y2="1">
            <stop offset="40%" stop-color="rgba(209, 78, 96, 85)" />
            <stop offset="100%" stop-color="rgba(245, 188, 86, 85)" />
          </linearGradient>
        </defs>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M229.599 22.3215C301.261 0.911759 421.753 -29.7817 462.763 65.2772C498.587 148.315 449.85 185.306 454.353 285.467C459.549 401.04 489.741 553.57 436.437 633.365C382.885 713.531 297.408 663.558 223.91 652.039C164.033 642.654 98.1304 665.343 47.5134 652.039C-17.3651 657.538 -58.2173 467.613 -47.2142 360.34C-36.5811 256.673 -63.1325 131.278 -17.3407 54.9918C31.3103 -26.0572 160.044 43.1016 229.599 22.3215Z"
          fill="url(#gradient2)"
        />
      </svg>
    </div>
  </div>
)

export default boardApplicationBlob
