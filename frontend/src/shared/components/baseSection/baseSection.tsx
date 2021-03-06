import React from 'react';
import { LanguageContext, LanguageContextValue } from "../../../components/languageSwitch/languageContext";
import DisplayedLanguage from "../../../models/language";
import { CardStyles } from "../../../shared/components/baseCard/baseCard";
import FadeIn from '../../../components/fadeInSection/fadeInSection';
import './baseSection.css'

export interface BaseSectionProps<T> {
    data: T[];
    customSectionStyle?: string;
}

export interface BaseSectionState {

}

export default abstract class BaseSection<T> extends React.Component<BaseSectionProps<T>, BaseSectionState> {
    protected constructor(props: BaseSectionProps<T>) {
        super(props);
    }

    // TODO: renderCard should probably be an interface not abstract method
    abstract renderCard(object: T, cardStyleIndex: number, language: DisplayedLanguage, id: number): JSX.Element

    // TODO: render should probably be an interface also, since we don't want to corner people into rending using this specific render code
    render(): JSX.Element {
        const sectionStyle: string = this.props.customSectionStyle ? this.props.customSectionStyle : "base-section";
        return (
            <LanguageContext.Consumer>
                {(value: LanguageContextValue) => {
                    const { language } = value;
                    if (!this.props.data.length) {
                        return <div className="base-empty-message">Nothing here yet! Check back later!</div>
                    } else {
                        return (
                                <div className={sectionStyle}>
                                    {this.props.data.map((object: T, idx: number) => {
                                        return (
                                            <FadeIn className="fade-in">
                                                {this.renderCard(object, idx % CardStyles.length, language, idx)}
                                            </FadeIn>
                                               )
                                    }
                                    )}
                                </div>
                        );
                    }
                }}
            </LanguageContext.Consumer>
        );
    }
}
