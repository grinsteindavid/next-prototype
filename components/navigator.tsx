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
        if (index < sections.length - 1) {
            const url = sections.join('/')
            router.push(`/${url}`)
        }
    }


    return (
        <Segment inverted style={{ borderRadius: 0, margin: 0 }}>
            <Breadcrumb>
                <Breadcrumb.Section
                    link
                    content="Home"
                    onClick={() => router.push('/')}
                />
                {sections.map((section, index) => {

                    return (
                        <Fragment key={index}>
                            <Breadcrumb.Divider style={{ color: 'white' }} />
                            <Breadcrumb.Section
                                active
                                link={index < sections.length - 1 && index !== 0}
                                onClick={() => navigate(index)}
                                content={section}
                            />
                        </Fragment>
                    )
                })}

            </Breadcrumb>
        </Segment>
    )
}