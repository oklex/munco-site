import YoastMeta from '../models/YoastMeta'

export const ParseMetaTags = {
    asArray(tags: any) {
        try {
            var array: YoastMeta[] = [
                // {
                //     property: 'og:description',
                //     content: 'How did you get involved in model Un?'
                // },
                // {
                //     property: 'og:title',
                //     content: 'Introducing Matthew Cheng'
                // }
            ]
            var stringifyList = JSON.stringify(tags)
            var jsonList = JSON.parse(stringifyList)
            // console.log('JSON LIST: ', jsonList)
            // console.log('JSON LIST at index 0: ', jsonList[0])
            array = jsonList
            return array
        } catch (err) {
            return []
        }
    }
}