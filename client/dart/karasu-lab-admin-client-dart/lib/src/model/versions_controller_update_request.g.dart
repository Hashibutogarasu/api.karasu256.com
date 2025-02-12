// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'versions_controller_update_request.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$VersionsControllerUpdateRequest
    extends VersionsControllerUpdateRequest {
  @override
  final String id;
  @override
  final String? name;
  @override
  final String? versionString;
  @override
  final bool? released;

  factory _$VersionsControllerUpdateRequest(
          [void Function(VersionsControllerUpdateRequestBuilder)? updates]) =>
      (new VersionsControllerUpdateRequestBuilder()..update(updates))._build();

  _$VersionsControllerUpdateRequest._(
      {required this.id, this.name, this.versionString, this.released})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(
        id, r'VersionsControllerUpdateRequest', 'id');
  }

  @override
  VersionsControllerUpdateRequest rebuild(
          void Function(VersionsControllerUpdateRequestBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  VersionsControllerUpdateRequestBuilder toBuilder() =>
      new VersionsControllerUpdateRequestBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is VersionsControllerUpdateRequest &&
        id == other.id &&
        name == other.name &&
        versionString == other.versionString &&
        released == other.released;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, id.hashCode);
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, versionString.hashCode);
    _$hash = $jc(_$hash, released.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'VersionsControllerUpdateRequest')
          ..add('id', id)
          ..add('name', name)
          ..add('versionString', versionString)
          ..add('released', released))
        .toString();
  }
}

class VersionsControllerUpdateRequestBuilder
    implements
        Builder<VersionsControllerUpdateRequest,
            VersionsControllerUpdateRequestBuilder> {
  _$VersionsControllerUpdateRequest? _$v;

  String? _id;
  String? get id => _$this._id;
  set id(String? id) => _$this._id = id;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _versionString;
  String? get versionString => _$this._versionString;
  set versionString(String? versionString) =>
      _$this._versionString = versionString;

  bool? _released;
  bool? get released => _$this._released;
  set released(bool? released) => _$this._released = released;

  VersionsControllerUpdateRequestBuilder() {
    VersionsControllerUpdateRequest._defaults(this);
  }

  VersionsControllerUpdateRequestBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _id = $v.id;
      _name = $v.name;
      _versionString = $v.versionString;
      _released = $v.released;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(VersionsControllerUpdateRequest other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$VersionsControllerUpdateRequest;
  }

  @override
  void update(void Function(VersionsControllerUpdateRequestBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  VersionsControllerUpdateRequest build() => _build();

  _$VersionsControllerUpdateRequest _build() {
    final _$result = _$v ??
        new _$VersionsControllerUpdateRequest._(
            id: BuiltValueNullFieldError.checkNotNull(
                id, r'VersionsControllerUpdateRequest', 'id'),
            name: name,
            versionString: versionString,
            released: released);
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
