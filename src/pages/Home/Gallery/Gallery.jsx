import img1 from '../../../assets/8693830034899_2 (1).jpg'
import img2 from '../../../assets/91GokfOZLVL._SL1500_-284x300.jpg'
import img3 from '../../../assets/1524499262-crayola-inspiration-kids-art-kit-1524499234.jpg'
const Gallery = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mb-20 px-28'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img1} alt="img" /></figure>
                <div className="card-body font-serif text-xl ">
                    <h2 className="card-title text-black">Art Craft Ice Cream Set Play Dough 280gm Toy magic</h2>
                    <div className='text-black'>
                        <p>Play dough play lets kids take the lid off their imaginations and explore their creativity.</p>
                        <p>Sets offer all kinds of open-ended play</p>
                        <p>This set contributes to the development of your child dexterity and imagination.</p>
                        <p>Comes with 5 pieces, 280 gr of play dough10 Pieces</p>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img2} alt="img" /></figure>
                <div className="card-body pt-10">
                    <h2 className="card-title font-serif text-xl ">Button Art</h2>
                    <div className='font-serif text-xl'>
                        <p>24 different colorful pattern-shaped Sponges to make pictures
                            <br />
                            24 Sponge Set for Art, Craft, Painting and Hobbies.
                            <br />
                            One sponge for each pattern.
                            <br />
                            Can be used in the bath or for craft activities
                            <br />
                            Ideal for those budding artists!!
                            <br />
                            Suitable for Age 3+
                            <br />
                            Have fun in the studying!</p>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img3} alt="img" /></figure>
                <div className="card-body font-serif text-xl ">
                    <h2 className="card-title">Kids Arts and Crafts Kits</h2>
                    <p>Children have endless creativity — and its up to us to help them unleash it in fun ways! Craft kits for kids can help them feel productive and artistic, and they will feel accomplished when they have a finished product at the end to show off! Check out our favorite art kits for kids to help your child feel like the next Picasso.</p>
                </div>
            </div></div>

    );
};

export default Gallery;
{/*<div>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
    </div>*/}