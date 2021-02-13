import { useRouter } from "next/router";
import { Fragment, useMemo } from "react";
import { Breadcrumb, Segment } from "semantic-ui-react";


export default function Navigator() {
    const router = useRouter()
    const sections = useMemo<string[]>(() => {
        const routes = router.route.split('/').filter(route => route !== '')

        return routes.map(route => {
            if (route === '[id]') {
                return String(router.query.id)
            }

            return route
        })
    }, [router.query, router.route])

    function navigate(index: number) {
        let url = '/'

        sections.forEach((section, sectionIndex) => {
            if (sectionIndex <= index) {
                url += section
            }
        })

        router.push(url)
    }


    return (
        <Segment inverted style={{ borderRadius: 0, margin: 0 }}>
            <Breadcrumb>
                {sections.map((section, index) => {

                    return (
                        <span
                            key={index}
                            onClick={() => navigate(index)}
                        >
                            {index > 0 && <Breadcrumb.Divider style={{ color: 'white' }} />}
                            <Breadcrumb.Section
                                active
                                link={index < sections.length - 1}
                                content={section}
                            />
                        </span>
                    )
                })}

            </Breadcrumb>
        </Segment>
    )
}