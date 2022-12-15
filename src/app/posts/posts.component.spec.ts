import {PostsComponent} from './posts.component';
import {PostsService} from "./posts.service";
import {EMPTY, of, throwError} from "rxjs";

describe('PostsComponent', () => {

  let component: PostsComponent
  let service: PostsService

  beforeEach(() => {
    // @ts-ignore
    service = new PostsService(null)
    component = new PostsComponent(service)
  });

  /// TEST ngOnInit()
  it('should call fetch when ngOnInit', () => {
    const spy = spyOn(service, 'fetch').and.callFake(() => {
      return EMPTY
    });
    component.ngOnInit()

    expect(spy).toHaveBeenCalled()
  });

  it('should update posts length after ngOnInit', () => {
    const posts = [1, 2, 3, 4]
    spyOn(service, 'fetch').and.returnValue(of(posts));
    component.ngOnInit()
    expect(component.posts.length).toBe(posts.length)
  });

  /// TEST add()
  it('should add new post', () => {
    const post = {title: 'test'}
    const spy = spyOn(service, 'create').and.returnValue(of(post))
    component.add(post.title)
    expect(spy).toHaveBeenCalled()
    // @ts-ignore
    expect(component.posts.includes(post)).toBeTruthy()
  });

  it('should set message to error message', () => {
    const error = 'Error message'
    spyOn(service, 'create').and.returnValue(throwError(error))
    component.add('Post Title')
    expect(component.message).toBe(error)
  });

  /// TEST delete()
  it('should delete post if user confirms', () => {
    const spy = spyOn(service, 'remove').and.returnValue(EMPTY);
    spyOn(window, 'confirm').and.returnValue(true)
    component.delete(10)
    expect(spy).toHaveBeenCalledWith(10)
  });

  it('should NOT delete post if user doesnt confirm', () => {
    const spy = spyOn(service, 'remove').and.returnValue(EMPTY);
    spyOn(window, 'confirm').and.returnValue(false)
    component.delete(10)
    expect(spy).not.toHaveBeenCalled()
  });

});
