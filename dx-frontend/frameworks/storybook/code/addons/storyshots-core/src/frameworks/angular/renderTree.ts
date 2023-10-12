import AngularSnapshotSerializer from 'jest-preset-angular/build/serializers/ng-snapshot';
import HTMLCommentSerializer from 'jest-preset-angular/build/serializers/html-comment';
import { TestBed } from '@angular/core/testing';
import { addSerializer } from 'jest-specific-snapshot';
import { getApplication, storyPropsProvider, PropertyExtractor } from '@storybook/angular/renderer';
import { BehaviorSubject } from 'rxjs';

addSerializer(HTMLCommentSerializer);
addSerializer(AngularSnapshotSerializer);

function getRenderedTree(story: any) {
  const currentStory = story.render();

  const analyzedMetadata = new PropertyExtractor(currentStory.moduleMetadata, story.component);

  const application = getApplication({
    storyFnAngular: currentStory,
    component: story.component,
    // TODO : To change with the story Id in v7. Currently keep with static id to avoid changes in snapshots
    targetSelector: 'storybook-wrapper',
    analyzedMetadata,
  });

  TestBed.configureTestingModule({
    imports: [application],
    providers: [storyPropsProvider(new BehaviorSubject(currentStory.props))],
  });

  return TestBed.compileComponents().then(() => {
    const tree = TestBed.createComponent(application);
    tree.detectChanges();

    // Empty componentInstance remove attributes of the internal main component (<storybook-wrapper>) in snapshot
    return { ...tree, componentInstance: {} };
  });
}

export default getRenderedTree;
