import FootImg from '~/assets/images/foot.png';
import { SERVICE_ITEMS } from '~/constants/serviceItems';
import ServiceItem from './ServiceItem';

const Services = () => {
    // Render Service List
    const renderServiceList = SERVICE_ITEMS.map((item) => <ServiceItem item={item} key={item.id} />);
    return (
        <section className="services pt-10 md:px-0 px-4">
            <div className="container mx-auto">
                <div className="section-heading md:w-1/2 w-auto text-center mx-auto">
                    <img src={FootImg} className="mx-auto w-14" />
                    <h1 className="heading">We look after your pet with our best staffs</h1>
                    <p className="mt-4">
                        Grooming Supply provides grooming services for all dog and cat breeds. We are fully committed to
                        the health.
                    </p>
                </div>
                <div className="services-list grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 mt-[115px] gap-6">
                    {renderServiceList}
                </div>
            </div>
        </section>
    );
};

Services.propTypes = {};

export default Services;
