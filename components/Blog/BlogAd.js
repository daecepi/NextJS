import Image from "next/image";
const BlogAd = () => {
	return (
		<div className="c-copper-chronicles__ad">
			{/* <a href="link" v-if="image && link">
            <img className="c-copper-chronicles__ad__img" :alt="alt ? alt : 'Chronicles image'" :src="image">
          </a> */}
			<a href="/infographic_roi-survey_impact-of-crm-in-the-relationship-era">
				<Image
					src="/imgs/blog/AD-1--uncle-crm.jpg"
					width="676"
					height="920"
				></Image>
				{/* <picture>
              <source type="image/webp" srcset="/imgs/blog/AD-1--uncle-crm.webp"  className="c-copper-chronicles__ad__img" alt="AD-1 uncle crm image"  />
              <source type="image/png" srcset="/imgs/blog/AD-1--uncle-crm.jpg"  className="c-copper-chronicles__ad__img" alt="AD-1 uncle crm image"  />
              <img   className="c-copper-chronicles__ad__img" alt="AD-1 uncle crm image"   src="/imgs/blog/AD-1--uncle-crm.jpg"   />
    </picture> */}
			</a>
		</div>
	);
};

export default BlogAd;
