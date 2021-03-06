import { NextRouter } from "next/router";
import { useMemo } from "react";
import { Breadcrumb, Segment } from "semantic-ui-react";

export interface IProps {
    router: NextRouter
}

export default function Navigator({
    router,
}: IProps) {
    const sections = useMemo<string[]>(() => {
        const routes = router.route.split('/').filter(route => route !== '')

        return routes.map(route => {
            if (route.includes('[') || route.includes(']')) {
                const param = route.replace(/[\[\]']+/g, '')
                return String(router.query[param])
            }

            return route
        })
    }, [router.query, router.route])

    function navigate(index: number) {
        let url = ''

        sections.forEach((section, sectionIndex) => {
            if (sectionIndex <= index) {
                url += `/${section}`
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