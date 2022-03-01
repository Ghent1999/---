/* eslint-disable jsx-a11y/alt-text */
interface ContentGalleryProps {
  tab: string;
}

export default function ContentGallery({ tab }: ContentGalleryProps) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-white mt-3">{tab}</h1>
          <div className="row">
            <a
              href="https://unsplash.it/1200/768.jpg?image=251"
              data-toggle="lightbox"
              data-gallery="example-gallery"
              className="col-lg-3 col-md-4 col-6 my-3"
            >
              <img
                src="https://unsplash.it/600.jpg?image=251"
                className="img-fluid card"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
